<template>
  <div class="wrapper" style="width: 100vw; display: flex; justify-content: center; align-items: center;">
    <form style="max-width: 30vw;">
      <H4> Ajoutez un commentaire</H4>
      <Textarea name="" id="" cols="50" rows="10"></Textarea>
      <button style="width: 100%" type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import { useMachine } from './helpers/hookMachine';
import machine from "./composition/machine.js";
export default {
  name: "Commentaire",
  setup(){
      const [state, context, send, can] = useMachine(machine)
      window.send = send;
      window.state = state;
  }

};
</script>

<style>
</style>