<template>
  <div class="wrapper" style="width: 100vw; display: flex; justify-content: center; align-items: center;">
    <form style="max-width: 30vw;">
      <h4> Ajoutez un commentaire</h4>
      <textarea name="" id="" cols="50" rows="10"></textarea>
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