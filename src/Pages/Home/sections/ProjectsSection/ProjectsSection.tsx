import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Login Page com Autenticação",
            subtitle: "Set 2025 - Set 2025",
            srcImg: "/assets/images/LoginPage.png",
            description: "Aplicação full stack permite que o usuário faça login utilizando autenticação com JWT. O frontend se comunica com o backend para validar o login e fornecer um token JWT, que será usado para autenticação nas próximas requisições..",
            technologies: "Tecnologias: Angular, TypeScript, SCSS, Java com Spring Security, JWT e token Bearer",
            websiteURL: "https://login-page-frontend-otaviograssi.netlify.app/login",
            codeURL: "https://github.com/OtavioGrassi/login-page-fullstack-frontend",
        },
        {
            title: "Dashboard Financeiro Binance",
            subtitle: "Set 2025 - Set 2025",
            srcImg: "/assets/images/Binance.png",
            description: "Aplicação full stack para exibição de dados financeiros em tempo real, com integração à API pública da Binance. Conta com gráficos candlestick interativos via ApexCharts, filtros por par de moedas e período, comunicação entre front-end e back-end e atualizações dinâmicas.",
            technologies: "Tecnologias: React.js, JavaScript ES6+, CSS3, Axios, ApexCharts, Node.js, Express, REST API, JSON, CORS",
            websiteURL: "https://github.com/OtavioGrassi/Dashboard-Binance-Api-React",
            codeURL: "https://github.com/OtavioGrassi/Dashboard-Binance-Api-React",
        },
        {
            title: "To Do List",
            subtitle: "Ago 2025 - Ago 2025",
            srcImg: "/assets/images/ToDoList.png",
            description: "Aplicação CRUD para gerenciamento de tarefas, com funcionalidades de criação, edição, busca, filtros por status e ordenação alfabética. Projeto focado em componentização, manipulação de listas, eventos e controle de estado no React.",
            technologies: "Tecnologias: React, JavaScript, HTML, CSS",
            websiteURL: "https://github.com/OtavioGrassi/To-Do-List-em-React-JS",
            codeURL: "https://github.com/OtavioGrassi/To-Do-List-em-React-JS",
        },
        {
            title: "Landing Page E-commerce Supermercado",
            subtitle: "Jun 2025 - Jun 2025",
            srcImg: "/assets/images/Supermercado.png",
            description: "Aplicação front-end simulando um e-commerce, com funcionalidades de carrinho de compras, atualização dinâmica de itens e cálculo automático de totais. Utiliza HTML, CSS e JavaScript, com dados fornecidos por uma API REST local com JSON Server.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, API Rest, JSON",
            websiteURL: "https://github.com/OtavioGrassi/Teste-Front-Tgid",
            codeURL: "https://github.com/OtavioGrassi/Teste-Front-Tgid",
        },
        {
            title: "Questões Objetivas",
            subtitle: "Set 2024 - Dez 2024",
            srcImg: "/assets/images/Questoes.png",
            description: "Aplicação interativa para simulação de questões de múltipla escolha, baseada em provas como ENEM e ENADE. Apresenta enunciados e alternativas de forma dinâmica, promovendo a familiarização com o formato oficial de exames.",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: "https://apps.univesp.br/questoes-objetivas/",
            codeURL: "https://github.com/univesp/questoes-objetivas",
        },
        {
            title: "História da Pessoa com Deficiência",
            subtitle: "Ago 2024 - Nov 2024",
            srcImg: "/assets/images/Deficiencia.png",
            description: "Aplicação interativa em formato de linha do tempo, que apresenta a história da pessoa com deficiência desde as civilizações antigas até os dias atuais. Desenvolvida com foco em acessibilidade, navegação clara e conteúdo educativo.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, JSON",
            websiteURL: "https://apps.univesp.br/historia-da-pessoa-com-deficiencia/",
            codeURL: "https://github.com/univesp/linha-do-tempo-da-acessibilidade",
        },
        {
            title: "Imposto de Renda",
            subtitle: "Jul 2024 - Set 2024",
            srcImg: "/assets/images/Imposto.png",
            description: "Aplicação educativa desenvolvida para orientar o processo de declaração do imposto de renda. Apresenta instruções passo a passo, exemplos práticos e conteúdo visual para facilitar o entendimento de contribuintes iniciantes.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, JSON",
            websiteURL: "https://apps.univesp.br/imposto-de-renda/",
            codeURL: "https://github.com/univesp/imposto-de-renda",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
