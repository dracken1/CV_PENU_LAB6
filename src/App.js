import React from 'react';
import './App.css';
import { ResponsiveBullet } from '@nivo/bullet';
import {useState} from 'react';
import graph from './graph';

function App() {  
  console.log();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nicolás Cárdenas Chaparro</h1>
        <h2>Estudiante Universitario</h2>
      </header>
      <div className="sidebar">
        <h1 style={{ color: "black" }}>Perfil</h1>
        <hr></hr>
        <p>Estudiante de decimo semestre de
        Ingeniería de Sistemas en la Escuela
        Colombiana de Ingeniería Julio
        Garavito, a lo largo de la carrera he
        tenido la oportunidad de desarrollar
        mis habilidades como programador en
        diferentes proyectos que
        adicionalmente me permitieron
        adquirir conocimientos en redes, bases
        de datos, arquitectura de software,
        diseño, modelado de sistemas y
        ciberseguridad. Me considero una
        persona motivada, dispuesta siempre a
        aprender algo nuevo.
        No cuento con experiencia profesional,
        sin embargo, los proyectos realizados a
        lo largo de mi carrera simulaban
        encontrarse en un entorno empresarial
        o de la vida real.
        Tengo un nivel alto en inglés, tome el
        curso Open English por un año y he
        tenido la oportunidad de convivir con
        personas provenientes de Estados
Unidos.</p>
        <div className="profilepicture">
          hola
        </div>
      </div>
      <div className="habilidades">
        <h2 style={{ color: "black", padding:"0", margin: "0" }}>Habilidades/Aptitudes</h2>
        <hr style={{ color: "black"}}></hr>
        <ResponsiveBullet
                    data={[
                        {
                            "id": "Desarrollo backend.",
                            "ranges": [                                
                                95,
                                100
                            ],
                            "measures": [
                                0
                            ],
                            "markers": [
                                95
                            ]
                        },
                        {
                            "id": "Gestion bases de datos",
                            "ranges": [
                                90,
                                100
                            ],
                            "measures": [
                              0
                            ],
                            "markers": [
                                90
                            ]
                        },
                        {
                            "id": "ciberseguridad",
                            "ranges": [                      
                                50,
                                100
                            ],
                            "measures": [
                                0
                            ],
                            "markers": [
                                50
                            ]
                        },
                        {
                            "id": "Habilidades blandas",
                            "ranges": [
                                70,
                                100
                            ],
                            "measures": [0
                            ],
                            "markers": [
                              70
                            ]
                        },
                        {
                            "id": "Diseño y modelado 3D",
                            "ranges": [
                                95,
                                100
                            ],
                            "measures": [0
                            ],
                            "markers": [
                              95
                            ]
                        },
                        {
                          "id": "Desarrollo frontend",
                          "ranges": [
                              85,
                              100
                          ],
                          "measures": [
                            0
                          ],
                          "markers": [
                              85
                          ]
                      },
                      {
                          "id": "Creatividad",
                          "ranges": [
                              100,
                              100
                          ],
                          "measures": [0
                          ],
                          "markers": [
                            100
                          ]
                      }
                    ]}
                    margin={{ top: 50, right: 30, bottom: 100, left: 130 }}
                    spacing={36}
                    titleAlign="start"
                    titleOffsetX={-130}
                    measureSize={0.2}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
                />
      </div>
      <div className="info1">
        <h3>Contacto</h3>
        <hr></hr>
        <h5>Teléfono<br></br><span style={{ color: "white" }}>3015231741</span></h5>
        <h5>dirección<br></br><span style={{ color: "white" }}>Calle 148#94ª-10 casa 7</span></h5>
        <h5>Correo Electrónico<br></br><span style={{ color: "white" }}>nicolas.cardenas.chaparro@gmail.com</span></h5>
      </div>
      <div className="info2">
        <h3>Aficiones</h3>
        <hr></hr>
        <ol style={{ listStyleType: "decimal" }}>
          <li>Ejercicio (Calistenia)</li>
          <li>Montar bicicleta (MTB)</li>
          <li>Actualidad tecnológica</li>
          <li>Acertijos</li>
        </ol>
      </div>
      <footer className="App-footer">
        <h3>Idiomas</h3>
        <p>Inglés – Avanzado (experiencia interactuando con norteamericanos)<br></br>
Portugués - Básico</p>
        <h3>Educaion</h3>
        <p>Colegio Nuevo San Luis Gonzaga
        2005 - 2014
Bachiller académico <br></br>
Escuela Colombiana de Ingeniería Julio Garavito
2015 - actualidad
Ingeniero de Sistemas</p>
      </footer>
    </div>
  );
}

export default App;
