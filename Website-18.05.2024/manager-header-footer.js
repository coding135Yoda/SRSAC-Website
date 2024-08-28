class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                header{
                margin: -13px 0;
                }
                .nav01{
                    display:grid;
                    justify-content: center;
                }
                .navbar01 {
                position: relative;
                min-height: 39px;
                margin-bottom: 0px;
                border: 1px solid #2c75c2;
                }  
                nav01 ul {
                display:grid;
               
                justify-content: center;
                grid-auto-flow: column;
                list-style-type: none;
                justify-content: center;

                padding: 1rem;
                background-color: #094a8f;
                border-color: #000;
                }


                p {
                text-align: justify;
                }

                nav01 li {
                display: inline;
                margin-right: 1rem;
                }

                nav01 a {
                color: #ffffff;
                text-decoration: none;
                padding-right: 25px;
                }

                nav01 a:hover {
                color: #2c75c2;
                
                }
                
                .dropbtn {
                background-color: #04AA6D;
                color: rgb(168, 92, 92);
                padding: 16px;
                font-size: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                }
                .dropdown01 {
                position: relative;
                display: inline-block;
                }

                /* Dropdown Content (Hidden by Default) */
                .dropdown01-content {
                display: none;
                position: absolute;
                background-color: #6267d3;
                min-width: auto;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;
                border-radius: 5px;
                }
                /* Links inside the dropdown */
                .dropdown01-content a {
                color: rgb(240, 240, 240);
                padding: 8px 16px;
                text-decoration: none;
                display: block;
                }

                /* Change color of dropdown links on hover */
                .dropdown01-content a:hover {
                background-color: #d3cbfd;
                }

                /* Show the dropdown menu on hover */
                .dropdown01:hover .dropdown01-content{
                display: block;
                }

                /* Change the background color of the dropdown button when the dropdown content is shown */
                .dropdown01:hover .dropbtn {
                background-color: #229126;
                }
                .container01 {
                display: flex;
                align-items: center;
                flex-direction: column;
                }
                @media (min-width: 1200px) {
                .container01 {
                    width: 1170px;
                    margin-left: 160px;
                }
                }
                </style>

            
            <div class="container01">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <!-- Make header image dynamic, Done by Mohammed Saif 20-05-2024 -->
                    <a href="index.html"><img src="last-logo-srsac.png"
                        alt="STATE REMOTE SENSING APPLICATION CENTRE Govt. of Rajasthan"></a>
                </div>
            </div>
            <nav01>
                <ul class="nav01-links navbar01">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown01">
                        <a href="about.html">About</a>
                        <ul class="dropdown01-content">
                            <li><a href="#Geospatial hub of Rajasthan">Geospatial hub of Rajasthan</a></li>
                            <li><a href="#vision">Vision</a></li>
                            <li><a href="#ongoing-project">Ongoing Projects</a></li>
                        </ul>
                    </li>
                    <li><a href="Facilites.html">Facilites</a></li>
                    <li><a href="project-index.html">Projects</a></li>
                    <li><a href="map-index.html">Maps</a></li>
                    <li><a href="directory.html">Directory</a></li>
                    <li><a href="Feedback.html">Feedback</a></li>
                    <li><a href="Contact.html">Contact</a></li>
                </ul>
            </nav01>
        
        `;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>/* Use Flexbox for better layout control  */
            /* ----------------------footer--------------------------------------------- */
            /* Footer Styling */
            /* Footer Styles */
                
/* Footer Styles */
/* Footer Styles */
footer {
    margin: -13px 0;
}

.footersection1 {
      margin-top:50px;
      background-image: url('blue-back.jpg');
    padding: 1rem 0;
    // background: rgba(0, 0, 0, 0.7); /* Semi-transparent background for footer section */
}

.container2 {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
}

.row2 {
    display: flex;
    flex-wrap: wrap;
}

.col-lg-3, .col-md-6, .col-12 {
    flex: 1; /* Ensure each column takes up equal space */
    padding: 15px;
    box-sizing: border-box;
}

.footerbox {
    color: #fff;
    padding: 20px;
    height: 275px; /* Fixed height for footer box */
    background: rgba(11, 103, 153, 0); /* Semi-transparent background */
    display: flex;
    flex-direction: column;
    
    background-size: cover; /* Cover the entire footer box */
    background-position: center; /* Center the image */
    position: relative; /* To use the rgba overlay */
    box-sizing: border-box; /* Include padding and border in element's total width and height */
}

.footerbox::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Overlay to make text readable */
    z-index: 0;
}

.footerbox * {
    position: relative; /* Ensure text is above the overlay */
    z-index: 1;
}

.footerbox h2 {
    font-size: 18px;
    position: relative;
    margin: 0 0 10px 0;
    padding: 0 0 20px 0;
}

.footerbox h2:before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
}

.footerbox h2:after {
    content: "";
    display: inline-block;
    width: 70px;
    height: 2px;
    background: #ddd;
    position: absolute;
    left: 0;
    bottom: 2px;
}

.footerbox h5 {
    font-size: 18px;
    font-weight: 700;
    margin: 5px 0; /* Add margin to control spacing */
}

.footerbox h6 {
    font-size: 16px;
    margin: 5px 0; /* Add margin to control spacing */
}

.footerbox p {
    color: #fff;
    margin: 5px 0; /* Reduce the margin to control spacing */
    padding: 0 0 0 23px;
    font-size: 15px;
    line-height: 22px;
    position: relative;
}

.footerbox ul {
    margin: 0;
    padding: 0;
}

.footerbox ul li {
    list-style: none;
    border-bottom: 1px dotted #fff;
    padding: 5px 0 6px 0;
    font-size: 14px;
    margin-right: 15px;
}

.footerbox ul li a {
    color: #fff;
    transition: transform .1s;
    display: block;
}

.footerbox ul li a:hover {
    transform: scale(1.05);
}

.footerIcon {
    position: absolute;
    left: 0;
    top: 3px;
}

.footerbox .vistorbox {
    background: #b0c7d31a;
    text-align: center;
    margin: 15px 0;
    padding: 8px 0;
    font-family: arial;
}

.footerbox .vistorbox p {
    color: #fff;
    margin: 0;
    padding: 0;
}

.footerbox .vistorbox span {
    font-weight: 500;
}
</style>
            <footer class="clearfix float-left w-100 clearfix">
    <section class="footersection1 py-4 clearfix">
        <div class="container2">
            <div class="row2">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="footerbox"> 
                        <h2>Nodal Officer:</h2>
                        <h5>Mr. Rajeev Jain</h5>
                        <h6>Project Director</h6>
                        <p><span class="ti-map-alt footerIcon"></span>7X4P+9V7, Subhash Nagar, Pal Road, Jodhpur, Rajasthan 342008 </p>
                        <p><span class="ti-headphone footerIcon"></span>02912785105</p>
                        <!-- <p><span class="ti-email footerIcon"></span>director-dst@rajasthan.govin</p> -->
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="footerbox">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="https://jankalyan.rajasthan.gov.in/#/home">Jankalyan Portal, Rajasthan</a></li>
                            <li><a href="http://satcom.rajasthan.gov.in/Pages_All/Index.aspx">SATCOM, DST-Rajasthan</a></li>
                            <li><a href="https://assembly.rajasthan.gov.in/">Vidhansabha, Rajasthan</a></li>
                            <li><a href="https://cmo.rajasthan.gov.in/">CMO, Rajasthan</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="footerbox">
                        <h2>Important Links</h2>
                        <ul>
                            <li><a href="https://rajasthan.gov.in/">Rajasthan Government</a></li>
                            <li><a href="https://finance.rajasthan.gov.in/website/">Finance Department</a></li>
                            <li><a href="https://environment.rajasthan.gov.in/content/environment/en.html#">Department of Environment</a></li>
                            <li><a href="https://education.rajasthan.gov.in/">Department of Education</a></li>
                            <li><a href="https://plan.rajasthan.gov.in/home/dptHome">Department of Planning</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="footerbox">
                        <h2>Visitor & Updated Date</h2>
                        <div class="vistorbox">
                            <p>You are Visitor No : </p>
                            <span><span id="lblVisitorCounter">272602</span></span>
                        </div>
                        <div class="vistorbox">
                            <p>Last Updated Date :</p>
                            <span><span id="lblUpdateMsg">23/05/2024</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</footer>

        `;
    }
}



class SpecialPersonls extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>/* Use Flexbox for better layout control  */
            /* ----------------------footer--------------------------------------------- */
            /* Footer Styling */
            /* Footer Styles */
                
/* Footer Styles */
/* Footer Styles */

footer01 {
            margin: -13px 0;
        }

        .footersection01 {
            margin-top: 50px;
            background-image: url('blue-back.jpg');
            padding: 1rem 0;
            background: #FFFFFF; /* Semi-transparent background for footer section */
        }

        .container02 {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .row02 {
            display: flex;
            flex-wrap: wrap;
        }

        .col-lg-3, .col-md-6, .col-12 {
            flex: 1; /* Ensure each column takes up equal space */
            padding: 15px;
            box-sizing: border-box;
        }

        .footerbox02 {
            color: #fff;
            padding: 20px;
            height: 350px; /* Fixed height for footer box */
            background: rgba(11, 103, 153, 0); /* Semi-transparent background */
            display: flex;
            flex-direction: column;
            box-shadow: 5px 10px 8px #888888;
            background-size: cover; /* Cover the entire footer box */
            background-position: center; /* Center the image */
            position: relative; /* To use the rgba overlay */
            box-sizing: border-box; /* Include padding and border in element's total width and height */
            transition: transform 0.3s ease-in-out;
        }

        .footerbox02:hover {
            transform: scale(1.05); /* Zoom out effect on hover */
        }

        .footerbox02::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5); /* Overlay to make text readable */
            z-index: 0;
        }

        .footerbox02 * {
            position: relative; /* Ensure text is above the overlay */
            z-index: 1;
        }

        .footerbox02 h22 {
            font-size: 18px;
            position: relative;
            margin: 0 0 10px 0;
            padding: 0 0 20px 0;
        }

        .footerbox02 h22:before {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
        }

        .footerbox02 h22:after {
            content: "";
            display: inline-block;
            width: 70px;
            height: 2px;
            background: #ddd;
            position: absolute;
            left: 0;
            bottom: 2px;
        }

        .footerbox02 h5 {
            font-size: 18px;
            font-weight: 700;
            margin: 5px 0; /* Add margin to control spacing */
        }

        .footerbox02 h6 {
            font-size: 16px;
            margin: 5px 0; /* Add margin to control spacing */
        }

        .footerbox02 p {
            color: #fff;
            margin: 5px 0; /* Reduce the margin to control spacing */
            padding: 0 0 0 23px;
            font-size: 15px;
            line-height: 22px;
            position: relative;
        }

        .footerIcon {
            position: absolute;
            left: 0;
            top: 3px;
        }

        .footerbox02 .vistorbox {
            background: #b0c7d31a;
            text-align: center;
            margin: 15px 0;
            padding: 8px 0;
            font-family: arial;
        }

        .footerbox02 .vistorbox p {
            color: #fff;
            margin: 0;
            padding: 0;
        }

        .footerbox02 .vistorbox span {
            font-weight: 500;
        }

        .img {
            width: 200px; /* Adjust width as needed */
            height: 265px; /* Make height equal to width for circle */
            border-radius: 60%; /* Creates a circle */
            object-fit: cover; /* Ensures the image covers the entire container without stretching */
            padding-bottom: 2rem;
            margin-left: 50px; /* Shifts the image to the right */
        }

        .decsription {
            color: #aaaaa;
            font-family: "Times New Roman", Times, serif;
            text-align: center;
            font-size: 15px;
            position: relative;
            padding: 0 0 20px 0;
        }
    </style>
</head>
<body>
    <footer01 class="clearfix float-left w-100 clearfix">
        <section class="footersection01 py-4 clearfix">
            <div class="container02">
                <div class="row02">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footerbox02">
                            <img src="Imagees-project/Mr Cheif Minister.jpg" class="img">
                            <h2 class="decsription">Hon'ble Chief Minister, Rajasthan</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footerbox02">
                            <img src="Imagees-project/Mr sanjay sharma.jpg" class="img">
                            <h2 class="decsription">Minister of Forest, Science & Technology Department, Raj.</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footerbox02">
                            <img src="Imagees-project/V-SARAVANA-KUMAR-IAS-RJ.jpg" class="img">
                            <h2 class="decsription">Secretary & Commissioner to the Science and Technology department</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer01>

        `;
    }
}
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
customElements.define('special-personals', SpecialPersonls);
