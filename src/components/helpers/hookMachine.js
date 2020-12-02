
import { ref, watch, watchEffect } from 'vue';
import { interpret, transition } from 'robot3';
export function useMachine(machine, initialContext = {}) {
    const reference = ref();
    if (reference.value === undefined) {
        reference.value = interpret(
            machine,
            () => {
                state.value = service.machine.current;
                context.value = service.context;
            },
            initialContext

        )
       
    }
    const service = reference.value;
    const state = ref(service.machine.current);
    const context = ref(service.context);
    

    const send = ((type, params = {}) => {
        service.send({
            type: type,
            ...params
        });
    });
    window.service = service;

    const can = ((transitionName) => {
        const transitions = ref(service.machine.state.value.transitions);
        if (!transitions.value.has(transitionName)) {
            return false;
        }
        const transitionsForName = transitions.value.get(transitionName);
        for (const t of transitionsForName) {
            if ((t.guards && t.guards(service.context)) || !t.guards) {
                return true;
            }
        }
        return false;


    }, [service.context, service.machine.state.value.transitions]);
     
    return [state,context,send,can]
}