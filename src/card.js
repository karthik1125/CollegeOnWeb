import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const CardHome= () => (
  <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    //image={props.course.fields.courseImage.fields.file.url}
                    title="TestData"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                       testsdsdasdassd
                    </Typography>
                    <Typography component="p">
                        karthiok
                    </Typography>
                    </CardContent>
                </Card>
)

export default CardHome;
