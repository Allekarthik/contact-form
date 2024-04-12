
                function sendMail(){
                    emailjs.init("WMi6pXOSmw0E_acSz");
        
                    var params={
                        sendername:document.querySelector("#sendername").value,
                        to:document.querySelector("#to").value,
                        subject:document.querySelector("#subject").value,
                        replyto:document.querySelector("#replyto").value,
                        message:document.querySelector("#message").value,
                    };
                    var serviceId="service_aer63yu";
                    var templateId="template_ui97d0w";
                    emailjs.send(serviceId,templateId,params)
                    .then(re =>{
                        alert("email sent successfully");
                    })
                    .catch(error => {
                        console.error('Error sending email:', error);
                    });
                }