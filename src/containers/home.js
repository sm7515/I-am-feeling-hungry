import React from 'react';
import axios from 'axios';
import Step from '../components/step';
import Nutrition from '../components/nutrition';
import TextSlider  from '../components/textslider';
import Ingredients from '../components/ingredients';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {recipe:[],id:0,clicked:false,hover:false,nutrition:[],step:[],ingredients:[]};
        this.getInfo=this.getInfo.bind(this);
        this.onHover = this.onHover.bind(this); 
        this.onOut = this.onOut.bind(this)
    }

    onOut(){
        this.setState({ hover: false });
    }

    onHover(){
        this.setState({hover:true});
    }

    getInfo(){
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=b40b5b8a881644c0bfd71e7ed3c2cbf6`)
            .then(res=>{
                this.setState({ recipe: res.data.recipes[0], 
                                id: res.data.recipes[0].id,
                                clicked: true});
                this.getIngredients();
                this.getNutrition();
                this.getStep();
                console.log(this.state.recipe);
            })
            .catch(err=>{console.log(err)})
    }

    getStep(){
        axios.get(`https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions?apiKey=b40b5b8a881644c0bfd71e7ed3c2cbf6`)
            .then((res)=>{
                this.setState({step:res.data});
            })
    }

    getNutrition(){
        axios.get(`https://api.spoonacular.com/recipes/${this.state.id}/nutritionWidget.json?apiKey=b40b5b8a881644c0bfd71e7ed3c2cbf6`)
            .then((res)=>{
                this.setState({nutrition:res.data});
                console.log(this.state.nutrition);
            })
            .catch(err=>{console.log(err)});
    }

    getIngredients(){
        axios.get(`https://api.spoonacular.com/recipes/${this.state.id}/ingredientWidget.json?apiKey=b40b5b8a881644c0bfd71e7ed3c2cbf6`)
            .then((res) => {
                this.setState({ ingredients: res.data.ingredients });
                console.log(res.data.ingredients);
            })
            .catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className={`container ${this.state.clicked?'clicked':''}`}>
                <div onMouseOver={this.onHover} onMouseOut={this.onOut} onClick={this.getInfo} 
                    className={`${this.state.hover ? 'unclickedDiv_hover' : 'unclickedDiv_nohover'} ${this.state.clicked?'clicked':''}`}>
                    <div className={this.state.hover ? 'hideHungry' : 'showHungry'}>I'm Feeling Hungry</div>
                    <TextSlider hover={this.state.hover}/>
                </div>
                <div className={`${this.state.clicked ? 'recipeBrief' :'unclicked'}`}>
                    <div className='shadow'>
                        <img className="snap" src={this.state.recipe.image} alt={this.state.recipe.title}/>
                    </div>
                    <h1 className='title'>{this.state.recipe.title}</h1>
                </div>
                <div className={`${this.state.clicked ? 'ingredients' : 'unclicked'}`}>
                    <Ingredients data={this.state.ingredients ? this.state.ingredients : []} />
                </div>
                <div className={`${this.state.clicked ? 'info' : 'unclicked'}`}>
                    <div className={`${this.state.clicked ? 'steps' : 'unclicked'}`}>
                        <h2 className='StepHeader'>Instructions</h2>
                        <Step data={this.state.step ? this.state.step:[]}/>
                    </div>
                    <div className={`${this.state.clicked ? 'nutrition' : 'unclicked'}`}>
                        <h2 className='NutritionHeader'>     Nutrition    </h2>
                        <Nutrition data={this.state.nutrition ? this.state.nutrition:[]}/>
                    </div>
                    <button className='refresh' onClick={this.getInfo}><span className='buttonText'>Still Hungry</span></button>
                </div>
            </div>
        );
    }
}

export default Home;
