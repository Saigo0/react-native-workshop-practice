import { View, Text, StyleSheet, TextInput, Button, FlatList, } from 'react-native'; // etapa 1: View, Text;  etapa 2:StyleSheet;  etapa 3: TextInput, Button;  etapa 5: FlatList

import { useState } from 'react'; // etapa 4

export default function App() { //etapa 1

  const [tarefa, setTarefa] = useState(''); // etapa 4 (também afetou TextInput e Button)
  const [tarefas, setTarefas] = useState([]); // etapa 5
  const toggleTarefa = (id) => { // etapa 6
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, completada: !tarefa.completada }
          : tarefa
      )
    );
  };


  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Minhas Tarefas</Text>
      <TextInput style={styles.input} placeholder="Nova tarefa..." value={tarefa} onChangeText={setTarefa} />
      <Button title="Adicionar" 
        onPress={() => { if (!tarefa.trim()) return;
          setTarefas([...tarefas, tarefa]);
          setTarefa('');
        }} // etapa 5
      />
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <Text style={[styles.tarefa, item.completada && styles.completada]} onPress={() => toggleTarefa(item.id)}>
           {item.completada ? '✅' : '◻️'} {item.titulo}
          </Text>
        )} // etapa 5 e etapa 6
      />

    </View>
  );

}

setTarefas([ // etapa 6
  ...tarefas,
  {
    id: Date.now(),
    titulo: tarefa,
    completada: false,
  },
]);


const styles = StyleSheet.create({ // etapa 2
  container: { // etapa 2
    flex: 1,
    padding: 24,
  },

  titulo: { // etapa 2
    fontSize: 32,
    fontWeight: 'bold',
  },

  input: { // etapa 3
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  tarefa: { // etapa 5
  fontSize: 18,
  paddingVertical: 12,
  },

  completada: { // etapa 6
  textDecorationLine: 'line-through',
  opacity: 0.5,
},

});
