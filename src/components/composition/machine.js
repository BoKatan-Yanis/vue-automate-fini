import { ref } from "vue"
import {
    createMachine,
    interpret,
    state,
    transition
} from "robot3";
export default createMachine({
        idle: state(
            transition("edit", "edit")
        ),
        edit: state(
            transition("submit", "loading"),
            transition("cancel", "idle"),


        ),
        loading: state(),
        success: state(),

});