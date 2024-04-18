import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography 
} from "@mui/material";

import createTheme from '@mui/material/styles/createTheme'
import TemplateDefault from "../templates/Default";
import theme from "../theme";

export default function Home() {
  
  const localTheme = createTheme(theme,{
    container:{
      padding: theme.spacing(8,0,6)
    },
    buttonAdd:{
      margin:'40px auto',
      display:'block',
    },
    cardMedia:{
      paddingTop:'56%',
    }
  })  
  
  return (
    <div>
      <TemplateDefault>
        <Container 
          maxWidth='sm' 
          sx={localTheme.container} 
        >
          <Typography 
            component='h1' 
            variant="h2"
            align="center"
          >
            teste 
          </Typography>
          <Button 
            variant='contained' 
            color='primary' 
            sx={localTheme.buttonAdd}
          >
            Publicar novo anúncio
          </Button>
        </Container>
        <Container
          maxWidth='md'
        >
          <Grid 
            container
            spacing={4}
          >
            <Grid 
              item
              sx={12}
              sm={6}
              md={4}
            >
              <Card>
                <CardMedia
                  sx={localTheme.cardMedia}
                  image={'https://source.unsplash.com/random'}
                  title='Titulo da imagem'
                />
                <CardContent>
                  <Typography 
                    component='h2' 
                    variant='h5'
                  >
                    Produto X
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    color='primary'
                  >
                    Editar
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                  >
                    Remover
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>      
    </div>
  );
}
