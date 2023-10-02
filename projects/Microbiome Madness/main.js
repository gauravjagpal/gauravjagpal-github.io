class MyHeader extends HTMLElement {
connectedCallback () {
	this.innerHTML = `
	<header>
    	<div class="container">
        	<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #333;" aria-label="Fifth navbar example">
            	<div class="container-fluid">
                	<a class="navbar-brand" href="#">MICROBIOME MADNESS</a>
                	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
    	                <span class="navbar-toggler-icon"></span>
	                </button>
        	        <div class="collapse navbar-collapse" id="navbarsExample05" style="margin-right: 10%">
            	        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin:auto">
                	        <li class="nav-item">
								<a class="navlist" href="index.html" style="color: yellow"><i class="fa fa-home"></i> HOME</a>
	                        </li>
    	                    <li class="nav-item">
        	                    <a class="navlist" href="about.html">ABOUT ME</a>
            	            </li>
                	        <li class="nav-item dropdown">
                    	        <a class="navlist dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">THERAPIES</a>
                        	    <ul class="dropdown-menu">
                            	    <li><a class="dropdown-item" href="Vagus-Nerve-Stimulation-(tVNS).html">Vagus Nerve Stimulation (tVNS)</a></li>
                                	<li><a class="dropdown-item" href="#">Another action</a></li>
                            	</ul>
	                        </li>
    	                    <li class="nav-item">
        	                    <a class="navlist" href="blog.html">BLOG</a>
            	            </li>
                	        <li class="nav-item">
                    	        <a class="navlist" href="coaching.html">COACHING</a>
                        	</li>
	                        <li class="nav-item">
    	                        <a class="navlist" href="contact.html">CONTACT</a>
        	                </li>
            	            <li class="nav-item">
                            	<a class="navlist" href="login.html">LOGIN</a>
                        	</li>
                    	</ul>
                	</div>
            	</div>
        	</nav>
    	</div>
	</header>
	`
}
}

customElements.define('my-header', MyHeader)



class MyFooter extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `
		<footer class="py-5">
			<div class="container e-book">
	        	<h3>
    	        	<strong>My E-Book dives deep into the science behind my protocol. Download it below for free.</strong>
        		</h3>
        		<a class="e-book-download" target="_blank" id="e-book" href="https://drive.google.com/file/d/18H9CYGLe9WJiaxFKgBJPiGGc4jc3luwz/view?fbclid=IwAR1ZQo_jkHvUb0-EZ-nvXFyVv1XgPkWxDvqeJ_ipEjemW9SYCOBDMBmxNGg" style="margin: 50px auto 100px;">
				<button class="button download" type="button">Download my E-Book</button>
        		</a>
	    	</div>
    		<div class="container footer">
        		<div class="col-md-5 mb-3" style="margin: auto;">
            		<form>
            		    <h5>Subscribe to our newsletter</h5>
               			<p>Monthly digest of what's new and exciting from us.</p>
		                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
    		                <label for="newsletter1" class="visually-hidden">Email address</label>
        		            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            		        <button class="btn btn-primary" type="button">Subscribe</button>
                		</div>
	            	</form>
    	    	</div>
        		<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            	<p>&copy; Microbiome Madness. All rights reserved.</p>
        		</div>
    		</div>
		</footer>
		`
	}
	}

	customElements.define('my-footer', MyFooter)