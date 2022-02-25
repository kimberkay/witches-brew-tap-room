import React from "react";
import AddKegForm from "./AddKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { v4 } from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        {
          id: v4(),
          flavor: 'Love Is In The Air',
          maker: 'Love Spell Belle',
          instructions: 'Drink up, look around, love might look you in the eye',
          price: '$2.14',
          pintsLeft: '124'
        },
        {
          id: v4(),
          flavor: 'New Year, New You',
          maker: 'Spell Bound',
          instructions: 'Set your goals, drink up, go',
          price: '$12.31',
          pintsLeft: '124'
        },
        {
          id: v4(),
          flavor: 'Rooted In Truth',
          maker: 'Earth & Water',
          instructions: 'Plant your feet on the ground, drink up, speak your truth',
          price: '$4.20',
          pintsLeft: '124'
        }
      ],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg !=null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
    }
  

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
        mainKegList: newMainKegList,
        formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg
    });
  }
  
  handleSellingPint = (id,pints) => {
    let newSelectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]; 
    newSelectedKeg.pintsLeft--;
    this.setState({selectedKeg: newSelectedKeg
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Potion List";
    } else if(this.state.selectedKeg !=null) {
      currentlyVisibleState = <KegDetail
      keg = {this.state.selectedKeg}
      onClickingSell = {this.handleSellingPint}
      onClickingEdit = { this.handleEditClick}
      onClickingDelete = { this.handleDeletingKeg } />
      buttonText = "Return to Keg List";
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddKegForm onAddKegCreation={this.handleAddingNewKegToList} />
      buttonText= "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        <div className="background-image"></div>
        <Container>
          {currentlyVisibleState}
          <Row>
          <div className="col-4" className="button-align">
            <button className="button" onClick={this.handleClick}>{buttonText}</button>
          </div>
        </Row>
        </Container>
      </React.Fragment>
    );
  }  
} 
  

  export default KegControl;

