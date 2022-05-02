import React, {Component} from 'react';
import Term from './Term.jsx'
import UR from './UR/UR.jsx'
import Year from './Year.jsx'
import Banner from './header/Banner'
//import Banner from './components/Banner';
//import UpperRight from './components/UpperRight'; 

class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
      requirements: null,
      plan: null,
      planList: null,
      catalog: null,
      };
    }

    loadNewPlan(){

      fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getCombinedNoSession.php')
       .then(response => response.json())
       .then(		
         data => this.setState({plan: this.convertPlan(data.plan), planList: 
          data.planList, catalog: data.catalog})
         );
     
      fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getRequirementsNoSession.php')
       .then(response => response.json())
       .then(			
         data => this.setState({requirements: data})
       );
     }
     
   
     componentDidMount() {
       this.loadNewPlan();
     }
   
   convertPlan(currPlan) {
       currPlan.years = [];
       for (var key in currPlan.courses) {
         var course = currPlan.courses[key];
         var currYear = course.year;
         if (currPlan.years[currYear] === undefined){
             currPlan.years[currYear] = [];
             currPlan.years[currYear]['year'] = currYear;
             currPlan.years[currYear]['fa'] = [];
             currPlan.years[currYear]['sp'] = [];
             currPlan.years[currYear]['su'] = [];
             
         }
         if (course.term === "Fall"){
             currPlan.years[currYear]['fa'][course.id] = course;
         }
         else if (course.term === "Spring"){
             currPlan.years[currYear]['sp'][course.id] = course;
         }
         else {
             currPlan.years[currYear]['su'][course.id] = course;
         }
       }
       return currPlan;
    }
   
    logout(){
      this.props.setLoggedIn(false)
    }


    render(){
      return (
        <div className="App" id="main">
    <Banner/>
    <div class="container border-grid">
        <div id="UL">   
            <h1>REQUIRED</h1>
            <div id="Required_div">
                <p>this is a test</p>
            </div>
            <h2>ELECTIVES</h2>
            <div id="Electives_div">
                <p>this is a test</p>
            </div>
            <h3>REQUIRED COGNATES</h3>
            <div id="Cognates_div">
                <p>this is a test</p>
            </div>
        </div>
        <div class="scroll border-grid">
            <div id="semesters">
                <div class="card" id="fa2019">FALL 2019
                    
                 
                </div>
                <div class="card" id="sp2020">SPRING 2020
                    
                
                </div>
                <div class="card" id="sum2020">SUMMER 2020
                    
                    
                </div>
                <div class="card" id="fa2020">FALL 2020
                    
                  
                </div>
                <div class="card" id="sp2021">SPRING 2021
                    
                  
                </div>
                <div class="card" id="sum2021">SUMMER 2021
                    
                  
                </div>
                <div class="card" id="fa2021">FALL 2021
                    
               
                </div>
                <div class="card" id="sp2022">SPRING 2022
                    
                 
                </div>
                <div class="card" id="sum2022">SUMMER 2022
                    
                  
                </div>
                <div class="card" id="fa2022">FALL 2022
                    
                 
                </div>
                <div class="card" id="sp2023">SPRING 2023
                    
                  
                </div>
                <div class="card" id="sum2023">SUMMER 2023
                    
                   
                </div>
            </div>
        </div>
        <div class = "LL border-grid">

        </div>
        <div class = "LR border-grid">
            <b>Course Finder</b>
            <table id="LR_table" class="display">
               
            </table>
            
        </div>
    </div>
        </div>
      
      );
    }
  
}

export default App;
