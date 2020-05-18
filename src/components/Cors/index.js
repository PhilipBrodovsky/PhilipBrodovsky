import React from 'react';

const Cors = props => {
   return (
      <div>
         <h1>Cors - Cross-Origin Resource Sharing</h1>
         <div>
            Well, For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.
            For example, if you want to access your API hosted at https://api.github.com from your client-side
            frontend application which is hosted at https://example.com. The browser will not allow this
            request to complete. You only need to think about CORS when : API accessed by the browser. API is
            hosted on a separate domain.

            The browsers enforce a security feature called Same Origin Policy.

            <br />
            Scheme name — It is the protocol to be used to access the resource on the Internet. The scheme
            names followed by the three characters :// .The most commonly used protocols are http://,
            https://, ftp://, and mailto://. Hostname — It is the address of the host where the resource is
            located. A hostname is a domain name assigned to a host computer. This is usually a combination of
            the host’s local name with its parent domain’s name. For example, www.dev.to consists of the
            host's machine name www and the domain name dev.to Port Number — Port is a communication endpoint
            where your application run. -


            CORS allows the server to explicitly whitelist certain origin and help to bypass the same-origin policy.
            If your server is configured for CORS, it will return an extra header with “Access-Control-Allow-Origin” on each response.

            For enabling CORS on your server application. You need two things.
            First, you need to determine the origins of whitelist.
            Second, you have to add the CORS middleware to the server.
      
         </div>
      </div>
   );
};

export default Cors;
