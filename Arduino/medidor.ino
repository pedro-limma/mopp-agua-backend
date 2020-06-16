float vazao; //Variável para armazenar o valor em L/min
float media=0; //Variável para tirar a média a cada 1 minuto
int contaPulso; //Variável para a quantidade de pulsos
int i=0; //Variável para contagem


void setup()
{ 
  Serial.begin(9600); //Inicia a serial com um baud rate de 9600
  
  pinMode(2, INPUT);
  attachInterrupt(0, incpulso, RISING); //Configura o pino 2(Interrupção 0) para trabalhar como interrupção
  Serial.println("\n\nInicio\n\n"); //Imprime Inicio na serial
}


void loop ()
{

  contaPulso = 0;   //Zera a variável para contar os giros por segundos
  sei();      //Habilita interrupção
  delay (1000); //Aguarda 1 segundo
  cli();      //Desabilita interrupção
  
  vazao = contaPulso / 7.5; //Converte para L/min
  media=media+vazao; //Soma a vazão para o calculo da media
  i++;
  
  Serial.print(vazao); //Imprime na serial o valor da vazão
  Serial.print(" L/min - "); //Imprime L/min
  Serial.print(i); //Imprime a contagem i (segundos)
  Serial.println("s"); //Imprime s indicando que está em segundos
  
  if(i==60)
  {
    media = media/60; //Tira a media dividindo por 60
    Serial.print("\nMedia por minuto = "); //Imprime a frase Media por minuto =
    Serial.print(media); //Imprime o valor da media
    Serial.println(" L/min - "); //Imprime L/min
    media = 0; //Zera a variável media para uma nova contagem
    i=0; //Zera a variável i para uma nova contagem
    Serial.println("\n\nInicio\n\n"); //Imprime Inicio indicando que a contagem iniciou
  }
  
}
 
 
void incpulso ()
{ 
  contaPulso++; //Incrementa a variável de contagem dos pulsos
}