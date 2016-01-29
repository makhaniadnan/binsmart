/*
 Project    : BINSMART 
 Author     : Pulak Chakraborty
 This project aims to capture the distance between an object
 and its nearest obstacle and publishes the data to a message broker
 
 The project consists of two parts
 
 Part I:
 Capture the distance between objects using HC-SR04 sensor
 The distance presented in the code is in mm and/or inches
 
 Part II:
 MQTT connection - non-blocking
 By using a non-blocking reconnect function, connect the client to
 a message broker and publish the reading from the sensor. 
 If the client loses its connection, it attempts
 to reconnect every 5 secondswithout blocking the main loop.

*/

#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>
//#include <iostream.h>

// Update the following fields for sensors attached to the smart device
const int TriggerPin = 8; //Trig pin
const int EchoPin = 9; //Echo pin
long Duration = 0;
char SenseDistance[50];

// Update these with values suitable for your hardware/network.
byte mac[]    = {  0x98, 0x4F, 0xEE, 0x01, 0xCA, 0xF5 };
IPAddress ip(192, 168, 178, 43);
IPAddress server(192, 168, 178, 34);

void callback(char* topic, byte* payload, unsigned int length) {
  // handle message arrived
}

EthernetClient ethClient;
PubSubClient client(ethClient);

long lastReconnectAttempt = 0;

boolean reconnect() {
  if (client.connect("arduinoClient")) {
    // Once connected, publish an announcement...
    client.publish("outTopic","hello world");
    // ... and resubscribe
    client.subscribe("inTopic");
  }
  return client.connected();
}

void setup()
{
  pinMode(TriggerPin,OUTPUT); // Trigger is an output pin
  pinMode(EchoPin,INPUT); // Echo is an input pin
  Serial.begin(9600); // Serial Output
  client.setServer(server, 1883);
  client.setCallback(callback);

  Ethernet.begin(mac, ip);
  delay(1500);
  lastReconnectAttempt = 0;
}


void loop()
{
 delay(1000); // Wait to do next measurement 
 digitalWrite(TriggerPin, LOW);
 delayMicroseconds(2);
 digitalWrite(TriggerPin, HIGH); // Trigger pin to HIGH
 delayMicroseconds(10); // 10us high
 digitalWrite(TriggerPin, LOW); // Trigger pin to HIGH
 Duration = pulseIn(EchoPin,HIGH); // Waits for the echo pin to get high
 // returns the Duration in microseconds
 
 String Distance_in = String(Distance(Duration)); // Use function to calculate the distance
 Serial.print("Distance = "); // Output to serial
 Serial.print(Distance_in);
 Serial.println(" inches");
 Distance_in.toCharArray(SenseDistance, 50);
  if (!client.connected()) {
    long now = millis();
    if (now - lastReconnectAttempt > 5000) {
      lastReconnectAttempt = now;
      // Attempt to reconnect
      if (reconnect()) {
        lastReconnectAttempt = 0;
      }
    }
  } else {
    // Client connected
    client.publish("outTopic", SenseDistance );
    client.loop();
  }

}

long Distance(long time)
{
 // Calculates the Distance in mm
 // ((time)*(Speed of sound))/ toward and backward of object) * 10
 long DistanceCalc; // Calculation variable
 //DistanceCalc = ((time /2.9) / 2); // Actual calculation in mm
 DistanceCalc = time / 74 / 2; // Actual calculation in inches
 return DistanceCalc; // return calculated value
}
