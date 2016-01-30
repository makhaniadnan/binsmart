message KuraPayload {

	
		message KuraMetric {

			enum ValueType {  
		
					DOUBLE         = 0; 
	
					FLOAT          = 1;

					INT64          = 2;

					INT32          = 3;
	
					BOOL           = 4;
	
					STRING         = 5;
	
					BYTES          = 6;
	
			}
	
	  
			required string    name            = 1;
	
				required ValueType type            = 2;

	
				optional double double_value       = 3;
		
				optional float  float_value        = 4;
		
				optional int64  long_value         = 5;
		
				optional int32  int_value          = 6;
		
				optional bool   bool_value         = 7;
		
				optional string string_value       = 8;
		
				optional bytes  bytes_value        = 9;
	
	           }

    
              message KuraPosition {
  
		     		 required double latitude   = 1;
     
			  	 required double longitude  = 2;
     
			 	 optional double altitude   = 3;
 
				 optional double precision  = 4; // dilution of precision of the current satellite fix. 
    

  
				 optional double heading    = 5;  // heading in degrees
  
			         optional double speed      = 6;  // meters per second
  
                                 optional int64  timestamp  = 7;
      
                                 optional int32  satellites = 8;  // number satellites locked by the GPS device
        		

		                 optional int32  status     = 9;  // status indicator for the GPS data: 1 = no GPS          

                               response; 2 = error in response; 4 = valid.
  
                 }

 
				   optional int64       timestamp = 1;
    
				optional KuraPosition position  = 2;
	

                            	extensions 3 to 4999;
   
                                repeated KuraMetric   metric    = 5000;  // can be zero, so optional
 	
                               optional bytes       body      = 5001;

}



//sample for profo buf working

var ProtoBuf = dcodeIO.ProtoBuf;
			var builder = ProtoBuf.loadProtoFile("./complex.proto"),
			    Game1 = builder.build("Game.Cars.Car");
			    //Car = Game1.Car;
			var car = new Game1({
				"model" : "Rusty",
				"vendor" : {
					"name" : "Iron Inc.",
					"address" : {
						"country" : "Upa"
					}
				},
				"speed" : "FAST"
			});
			var buffer = car.encode();
			console.log(buffer);
			var messagegpb = buffer.toBuffer();
			console.log(messagegpb);
			console.log("the decoded message");

			var msg = Game1.decode(messagegpb);
			console.log(msg);