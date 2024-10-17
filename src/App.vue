<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const pessoa = ref([])
const endereço = ref([])

async function getPessoa() {
  const { data } = await supabase.from('pessoa').select('nome, email, datanasc ')
  pessoa.value = data


}

async function getEndereço() {
  const { data } = await supabase.from('endereço').select('cidade, bairro, rua, num')
  endereço.value = data
}
onMounted(() => {
  getPessoa();
  getEndereço()

})


// async function insertValuesPessoa() {
//const { error } = await supabase.from('pessoa').insert({ name:  })}


//------------NÃO TA FUNCIONANDO-----------------------
//modelo de para insert no supabase 

    // create data
    const nome = ref([])
    const email = ref([])
    const datanasc = ref([])

    const createWorkout = async () => {

      const { error } = await supabase.from('pessoa').insert([
        {
          nome: nome.value,
          email: email.value,
          datanasc: datanasc.value
        }
        
      ])
      pessoa.value = error 
    } 
    

 
  
  
</script>

<template>
  
<!------ TA funcionando ------ <ul v-for="pessoas in pessoa" :key="pessoas.id">
    <li>{{ pessoas.nome }}</li>
    <li>{{ pessoas.email }}</li>
    <li>{{ pessoas.datanasc }}</li>
    <li>{{ endereço }}</li>
  </ul>-->

  <!------------FUNCIONA MAS O BOTAO NAO SALVA----------------->
  <form @submit.prevent="createWorkout">
    <h1>formulario</h1>
 
  <label for="">Nome:</label>
  <input type="text" v-model="nome" />

  <label for="">Email:</label>
  <input type="text" v-model="email">


  <label for="">Data de Nascimento:</label>
  <input type="date" v-model="datanasc">

  <button type="submit">save</button>

</form>
</template>