# this document is init todo list for developing fun dispatcher

- read each declarations
- merge them and deliver a single file to frontend
- find all active servers from?
  1. from config file (third party registration)
  2. provide an end point to register each service own information (self registration)
- handle incoming requests
- provide load balancing algorithm for dispatching request (currently roundRabin with weight according to occupied resources in each service )
- monitoring condition of services
- provide an efficient way to connect services to dispatcher ( http2 or websocket and sending data in form of binary)
- provide a way to handling sharing data between services
- implement middleware architecture for calling micro-service for implements authentication and some other service before or after calling main service
- define error handling and actions when some services or slow or unavailable (we have some option when an error raises for example returns error or empty array or using cache and default value )
