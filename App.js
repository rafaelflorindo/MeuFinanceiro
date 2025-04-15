import { useState } from 'react';
import { TextInput, StyleSheet, Text, 
  TouchableOpacity, View } from 'react-native';

export default function App() {
  const [rendimento, setRendimento] = useState();
  const [despesasFixas, setDespesasFixas] = useState();
  const [desejos, setDesejos] = useState();
  const [investimentos, setInvestimentos] = useState();
  const [calculado, setCalculado] = useState(false);

  const calcularRendimento = ()=>{
    try {
      const rendimentoConvertido = parseFloat(rendimento);
      if (isNaN(rendimentoConvertido)) throw new Error("Valor inválido");
    
      setDespesasFixas(rendimentoConvertido * 0.5);
      setDesejos(rendimentoConvertido * 0.3);
      setInvestimentos(rendimentoConvertido * 0.2);
      setCalculado(true);
    } catch (error) {
      console.warn("Erro ao calcular:", error.message);
    }
  }
  const limpar = ()=>{
    setCalculado(false)
    setRendimento(0)
  }
  return (
    <View style={styles.container}>
      <View style={styles.financeiro}>
        <Text style={styles.title}>Meu Financeiro</Text>

        <TextInput
          placeholder='Rendimento Liquido'
          style={styles.input}
          value={rendimento}
          onChangeText={setRendimento}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.bottom} onPress={calcularRendimento}>
          <Text style={styles.textBottom}>Calcular</Text>
        </TouchableOpacity>
        {calculado ?
        
        <View style={styles.vidaFinanceira}>
          <View style={styles.resultadoCard}>
            <Text style={styles.textResultado}>Salário Líquido</Text>
            {rendimento ? <Text style={styles.rendimento}>R$ {parseFloat(rendimento)}</Text> : null}
          </View>
          <View style={styles.resultadoCard}>
            <Text style={styles.textResultado}>Despesas Fixas</Text>
            {despesasFixas ? <Text>R$ {parseFloat(despesasFixas)}</Text> : null}
          </View>
          <View style={styles.resultadoCard}>
            <Text style={styles.textResultado}>Desejos</Text>
            {desejos ? <Text>R$ {parseFloat(desejos)}</Text> : null}
          </View>
          <View style={styles.resultadoCard}>
            <Text style={styles.textResultado}>Investimentos</Text>
            {investimentos ? <Text>R$ {parseFloat(investimentos)}</Text> : null}
          </View>
          <TouchableOpacity style={styles.bottom} onPress={limpar}>
        <Text style={styles.textBottom}>Limpar</Text>
      </TouchableOpacity>
        </View>:null}        
      </View>
      <Text style={styles.versao}>Versão: 1 - Prof. Rafael Florindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4eb712',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginBottom:50,
    fontWeight:'bold',
    fontSize:25
  },
  financeiro:{
    width: '70%',  
    maxWidth: 500, 
    backgroundColor: '#65c91b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    minHeight: 300,
    paddingLeft:30,
    paddingRight:30,
  },
  bottom:{
    backgroundColor: '#219100',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    height:50, 
    width:'100%',       
    marginTop: 20
  },
  textBottom:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  input:{
    backgroundColor:'white',
    color:'#006600',
    fontSize:15,
    width:'100%',
    height:45,
    borderRadius:10,
    padding:5    
  }, 
  vidaFinanceira: {
    marginTop: 30,
    width: '100%',
    backgroundColor:'#b8e994',
    borderRadius:10,
    padding:10,
    gap: 10,
  },
  resultadoCard: {
    backgroundColor: '#e2e2e2',
    borderWidth: 1,
    borderColor:1,

    borderRadius: 10,
    padding: 10,
  },
  textResultado:{
    fontWeight:'700'
  },
  versao:{
    position: 'absolute',
    fontWeight:'bold',
    bottom: 10,
    fontSize: 15,
    color: '#ffffffaa',
    textAlign: 'center',
    width: '100%',
  }
});
