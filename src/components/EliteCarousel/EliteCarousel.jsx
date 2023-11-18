import React from 'react'

function EliteCarousel() {
  return (
    <section class="container">
    <div id="home">
        <main class="content">
            <div class="void" id="void">
                <div class="crop">
                    <ul class="card-list">
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">HTML</span>
                                    <span>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">CSS</span>
                                    <span>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">JavaScript</span>
                                    <span>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">Bootstrap</span>
                                    <span>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">React</span>
                                    <span>React is a free and open-source front-end JavaScript library for building user interfaces based on components. </span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">NodeJS</span>
                                    <span>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. </span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="card">
                                <a href="#">
                                    <span class="model-name">ExpressJS</span>
                                    <span>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js,</span>
                                </a>
                            </div>
                        </li>
                        
                    </ul>
                    <div class="last-circle"></div>
                    <div class="second-circle"></div>
                </div>
               {/* <div class="mask"></div>  */}
                <div class="center-circle"></div>
            </div>
        </main>
    </div>
    <div id="about">
        <main class="content">
           <div class="title">
                <h4 class="title-txt">We Have Best Education</h4>
                <p>Far far away, behind the word mountains, far from the countries vokalia and Consonantia, there line the blind texts</p>
           </div>
           <div class="card-container">
                <div class="course-card">
                    <div class="image">
                        <i class="fa-brands fa-html5"></i>
                    </div>
                    <div class="course-content">
                        <h5>HTML</h5>
                        <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser</p>
                    </div>
                </div>
                <div class="course-card">
                    <div class="image">
                        <i class="fa-brands fa-css3"></i>
                    </div>
                    <div class="course-content">
                        <h5>Css</h5>
                        <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.</p>
                    </div>
                </div>
                <div class="course-card">
                    <div class="image">
                        <i class="fa-brands fa-js"></i>
                    </div>
                    <div class="course-content">
                        <h5>JavaScript</h5>
                        <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
                    </div>
                </div>
                <div class="course-card">
                    <div class="image">
                        <i class="fa-brands fa-bootstrap"></i>
                    </div>
                    <div class="course-content">
                        <h5>Bootstrap</h5>
                        <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</p>
                    </div>
                </div>
                <div class="course-card">
                    <div class="image">
                        <i class="fa-brands fa-react"></i>
                    </div>
                    <div class="course-content">
                        <h5>ReactJS</h5>
                        <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. </p>
                    </div>
                </div>
                <div class="course-card">
                    <div class="image">
                        <i class="fa-brands fa-node"></i>
                    </div>
                    <div class="course-content">
                        <h5>NodeJS</h5>
                        <p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.</p>
                    </div>
                </div>
           </div>
        </main>
    </div>
    <div id="tutorials">
        <main class="content">
            <h1 class="title">Tutorials</h1>
        </main>
    </div>
    <div id="examples">
        <main class="content">
            <h1 class="title">Examples</h1>
        </main>
    </div>
    <div id="questions">
        <main class="content">
            <h1 class="title">Questions</h1>
        </main>
    </div>
    <div id="contact">
        <main class="content">
            <h1 class="title">Contact</h1>
        </main>
    </div>
</section>
  )
}

export default EliteCarousel
