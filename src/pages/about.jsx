import React from 'react';

export const AboutPage = () => {
    return (
        <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', padding: '50px' }}>
            <h2 style={{ textAlign:'center', fontSize: '2em', fontWeight: 'bold', marginBottom: '0.5em' }}>Sobre Mí</h2>
            <p>
                Erick Raul Ramirez Rodriguez. Soy estudiante universitario de la carrera de Ingeniería en Ciencias de la Computación,
                actualmente cursando el cuarto año en la Universidad Católica de Honduras. Me considero una persona con alta capacidad para
                aprender y aplicar mis conocimientos en el ámbito profesional. Tengo habilidades tanto para trabajar en equipo como de manera
                independiente, adaptándome a las necesidades del entorno. Cuento con experiencia en el mantenimiento de equipos de cómputo,
                así como en la solución de posibles incidencias técnicas. Durante mi formación académica, he adquirido sólidos conocimientos
                en programación, desarrollo de software, tecnologías de la información y gestión de proyectos. Además, he desarrollado
                competencias en la integración de sistemas eléctricos con soluciones tecnológicas innovadoras, lo que me ha permitido abordar
                problemas de manera integral y eficiente. Busco seguir creciendo profesionalmente, aplicando mis habilidades y conocimientos
                para contribuir al desarrollo de proyectos tecnológicos que generen impacto positivo en la sociedad.
            </p>

            <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginTop: '1.5em', marginBottom: '0.5em' }}>Datos Personales</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.3em' }}>
                    <strong style={{ marginRight: '0.5em' }}>Teléfono:</strong> +504 99468653
                </li>
                <li style={{ marginBottom: '0.3em' }}>
                    <strong style={{ marginRight: '0.5em' }}>Email:</strong> erickraulrodriguez1104@gmail.com
                </li>
                <li style={{ marginBottom: '0.3em' }}>
                    <strong style={{ marginRight: '0.5em' }}>GitHub:</strong>{' '}
                    <a href="https://github.com/EriRRR" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                        https://github.com/EriRRR
                    </a>
                </li>
                <li style={{ marginBottom: '0.3em' }}>
                    <strong style={{ marginRight: '0.5em' }}>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/erick-r-ramirez/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                        https://www.linkedin.com/in/erick-r-ramirez/
                    </a>
                </li>
                <li style={{ marginBottom: '0.3em' }}>
                    <strong style={{ marginRight: '0.5em' }}>Portafolio detallado:</strong>{' '}
                    <a href="https://erirrr.github.io/Portafolo_ErickRRR.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                        https://erirrr.github.io/Portafolo_ErickRRR.io/
                    </a>
                </li>

                <li>
                    <strong style={{ marginRight: '0.5em' }}>Dirección:</strong> Choluteca, Choluteca, Honduras
                </li>
            </ul>
        </div>
    );
};