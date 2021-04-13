import React ,{useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import index from './Internship'
import Erro from './Internship/Error/Error'
import Second from './Internship/Second'




export default function App() {
      
        return (
                <Router>
                        
                        <Switch>
                                <Route path='/' exact component={index} />
                                <Route path='/first' exact component={index} />
                                <Route path='/sec' exact component={Second} />
                                <Route path='/third' exact component={Erro} />
                                
                                

                        </Switch>






                </Router>







        )
}
