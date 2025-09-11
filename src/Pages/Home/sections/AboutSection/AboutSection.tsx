import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "HTML", "CSS", "JavaScript", "React.js", "Git", "GitHub", "API REST", "Node.js", "Figma", "SEO", "Metodologias Ágeis", "Acessibilidade"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">1+ ano</Typography>
                                <Typography textAlign="center">Desenvolvimento Frontend</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Formação</Typography>
                                <Typography textAlign="center">Análise e Desenvolvimento de Sistemas</Typography>
                                <Typography textAlign="center"></Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Olá! Sou Otávio Grassi, desenvolvedor front-end com foco em criar interfaces modernas, acessíveis e responsivas que realmente entregam valor ao usuário. Tenho sólida experiência com HTML, CSS, JavaScript ES6+ e React.js, além de integração com APIs REST e back-end em Node.js.

                        Sou formado em Análise e Desenvolvimento de Sistemas pela FATEC-SP e atualmente curso pós-graduação em Desenvolvimento Full Stack pela PUC Minas. Já atuei como freelancer e estagiário de desenvolvimento web, contribuindo diretamente para projetos institucionais e landing pages voltadas para conversão, performance e usabilidade.

                        Gosto de construir aplicações com atenção à performance, acessibilidade e SEO, seguindo boas práticas e utilizando ferramentas modernas como Git, Figma e Firebase. Trabalho bem em equipe, com vivência em metodologias ágeis como Scrum e Kanban, e estou sempre buscando aprender mais.

                        Atualmente, busco minha primeira oportunidade CLT como Desenvolvedor Front-End Júnior para aplicar meus conhecimentos em projetos reais, colaborar com equipes de tecnologia e continuar evoluindo profissionalmente.

                        Se você procura alguém comprometido com qualidade de código, boas práticas e foco no usuário, vamos conversar!
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
