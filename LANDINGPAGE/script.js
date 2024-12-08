var header= document.getElementById("header");
            var ms= document.getElementById("KAWASAKI");
            var ml= document.getElementById("DUCATI");
            var ma= document.getElementById("SUZUKI");
            var mc= document.getElementById("HONDA");
            var m3= document.getElementById("YAMAHA");
            var mx= document.getElementById("BMW");
            var my= document.getElementById("APRILIA");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1682980798344-6feac9455e66?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="Kawasaki Ninja H2R";
                mph.innerHTML="2.5s";
                speed.innerHTML="249 mph";
                range.innerHTML="120 mi";
            }
            ml.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1698695067900-2bcfca3d2071?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="Ducati Panigale V4R";
                mph.innerHTML="2.9s" ;
                speed.innerHTML="200 mph";
                range.innerHTML="150 mi"
            }
            ma.onclick=function(){
                header.style.backgroundImage="url(https://imgs.search.brave.com/iAc12FZRBAD4UNr0ke0Lrk8ipmf6AEZYfXHdrQEo_48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvYmFsc3V6dWtp/LmNvbS9tb3RvcmN5/Y2xlL3NtZ3MvZGln/aXRhbC1hcmNoaXZl/L2ltYWdlcy8yX2Jp/a2Uvc3BvcnRzL2lt/Z18wNzhfNC5qcGc)"
                model.innerHTML="Suzuki Hayabusa GSX1300R";
                mph.innerHTML="3.0s";
                speed.innerHTML="194 mph";
                range.innerHTML="217 mi";
                alert("Coming Soon!");
                }
            mc.onclick=function(){
                header.style.backgroundImage="url(https://imgs.search.brave.com/gpaKikhe-VvOE2-gC9mKI0gN3grFbG3avwoJ49XXXwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9uZGEuY28udWsv/Y29udGVudC9kYW0v/Y2VudHJhbC9tb3Rv/cmN5Y2xlcy9zdXBl/cnNwb3J0cy9jYnIx/MDAwcnItcnItZmly/ZWJsYWRlLTIwMjQv/b3ZlcnZpZXcveGwt/dGlsZS9ob25kYS1j/YnIxMDAwcnItci14/bC10aWxlLTEyODB4/MTI4MC1tb2JpbGUu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL21fci5qcGc)"
                model.innerHTML="Honda CBR1000RR-R Fireblade SP";
                mph.innerHTML="2.9s";
                speed.innerHTML="186 mph";
                range.innerHTML="162 mi"
                // alert("Coming Soon!");
                    }


            m3.onclick=function(){
                header.style.backgroundImage="url(https://imgs.search.brave.com/-06nX2RmK4FUMaWTLXHlB9t8fkPneZEhHmSK_YKNSjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2ViYmlrZXdvcmxk/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMy8yMDIz/LVlhbWFoYS1ZWkYt/UjEtUjFNLTYtMTE3/Nng1ODguanBn)";
                model.innerHTML="Yamaha YZF-R1M";
                mph.innerHTML="3.1s";
                speed.innerHTML="186 mph";
                range.innerHTML="168 mi";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://imgs.search.brave.com/lUsvrY4U2fHt-vq7u1BDjHng3EB7gFEqWP1iSZfG4tM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI3NDc5/MTEuanBn)";
                model.innerHTML="BMW S1000RR";
                mph.innerHTML="3.1s";
                speed.innerHTML="190 mph";
                range.innerHTML="168 mi";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://imgs.search.brave.com/d29ySKD9NDEfoao1hxgr2gdqF9Y6xvcHVRnHh8FwBq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaWRl/cm1hZ2F6aW5lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNS9BcHJpbGlh/LVJTVjQtRmFjdG9y/eS1yZXZpZXctYmVh/dXR5LmpwZw)";
                model.innerHTML="Aprilia RSV4 Factory";
                mph.innerHTML="2.9s";
                speed.innerHTML="190 mph";
                range.innerHTML="186 mi";
            }