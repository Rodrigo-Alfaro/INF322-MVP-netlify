import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';
import { 
  Target, 
  Code, 
  Key, 
  Shield, 
  Clock, 
  Settings, 
  FileText, 
  Users, 
  CheckCircle 
} from 'lucide-react';

export const ProjectDetallesPage = () => {
    return (
        <div className="proyecto-detalles-page">
            <div className="proyecto-detalles-page__container">
                <h1 className="proyecto-detalles-page__title">
                    <Shield className="title-icon" />
                    Detalles del Proyecto
                </h1>
               
                <div className="proyecto-detalles-page__info-section">
                    <p className="proyecto-detalles-page__description">
                        Aquí encontrarás todos los detalles sobre el proyecto, incluyendo su propósito, 
                        las tecnologías utilizadas, el equipo detrás del proyecto, y mucho más.
                    </p>
                   
                    <div className="info-card info-card--right">
                        <h2 className="proyecto-detalles-page__subtitle">
                            <Target className="section-icon" />
                            Propósito del Proyecto
                        </h2>
                        <p className="proyecto-detalles-page__text">
                            El propósito de este proyecto es proporcionar a las empresas una solución 
                            integral de ciberseguridad para proteger sus datos críticos. Al fortalecer 
                            la defensa contra amenazas digitales, el proyecto ayuda a las empresas a 
                            operar de manera segura y confiable en el entorno digital.
                        </p>
                    </div>
                   
                    <div className="info-card info-card--left">
                        <h2 className="proyecto-detalles-page__subtitle">
                            <Code className="section-icon" />
                            Tecnologías Utilizadas
                        </h2>
                        <ul className="proyecto-detalles-page__list">
                            <li><Key size={18} /> React - para la construcción de la interfaz de usuario.</li>
                            <li><Key size={18} /> Node.js y Express - para el backend y la gestión de APIs.</li>
                            <li><Key size={18} /> MySQL - para el almacenamiento y gestión de datos.</li>
                            <li><Key size={18} /> Docker - para la contenedorización y despliegue de aplicaciones.</li>
                            <li><Key size={18} /> Herramientas de seguridad como OWASP ZAP y Nmap.</li>
                        </ul>
                    </div>

                    <div className="info-card info-card--right">
                        <h2 className="proyecto-detalles-page__subtitle">
                            <Settings className="section-icon" />
                            Características Clave
                        </h2>
                        <ul className="proyecto-detalles-page__list">
                            <li><Clock size={18} /> Monitoreo en tiempo real de amenazas y vulnerabilidades.</li>
                            <li><Shield size={18} /> Implementación de políticas de seguridad personalizadas.</li>
                            <li><FileText size={18} /> Informes detallados y análisis de seguridad.</li>
                            <li><Settings size={18} /> Integración con sistemas existentes de la empresa.</li>
                            <li><Users size={18} /> Soporte y mantenimiento continuo.</li>
                        </ul>
                    </div>

                    <div className="info-card info-card--left">
                        <h2 className="proyecto-detalles-page__subtitle">
                            <CheckCircle className="section-icon" />
                            Beneficios para las Empresas
                        </h2>
                        <p className="proyecto-detalles-page__text">
                            Al utilizar SecureNet Solutions, las empresas pueden:
                        </p>
                        <ul className="proyecto-detalles-page__list">
                            <li><Shield size={18} /> Reducir el riesgo de ciberataques y brechas de seguridad.</li>
                            <li><Key size={18} /> Proteger la información confidencial y los datos críticos.</li>
                            <li><Users size={18} /> Mejorar la confianza de los clientes y socios comerciales.</li>
                            <li><Settings size={18} /> Optimizar la eficiencia operativa mediante la automatización.</li>
                            <li><CheckCircle size={18} /> Garantizar el cumplimiento de normativas de seguridad.</li>
                        </ul>
                    </div>
                </div>
            </div>
           
            <BottomNavbar
                problemUrl={"http://localhost:5050/proyecto"}
                socialUrl="http://localhost:5050/rrss"
                teamUrl="http://localhost:5050/equipo"
                detailsUrl="http://localhost:5050/detalles"
            />
        </div>
    );
};

export default ProjectDetallesPage;
