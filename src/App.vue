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
</script>

<template>
  <ul v-for="pessoas in pessoa" :key="pessoas.id">
    <li>{{ pessoas.nome }}</li>
    <li>{{ pessoas.email }}</li>
    <li>{{ pessoas.datanasc }}</li>
    <li>{{ endereço}}</li>
    <!--<li>{{ Endereço }}</li>-->    
  </ul>
</template>
 