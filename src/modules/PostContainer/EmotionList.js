import React, { Component } from 'react';
import origin from '../../origin';


export default class EmotionList extends Component {
    state = {
    };
    constructor(props){
      super(props);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      if(nextProps.emotion != prevState.emotionList){
        var emotion = [1, [], [], [], [], []];
        nextProps.emotion.map(em => {
          emotion[em.emotion].push(em.author);
        });
        for(let i=5; i>0; i--){
          if(emotion[i].length) emotion[0] = i;
        }
        return({
          emotionList: nextProps.emotion,
          emotion: emotion
        })
      }
      return(null)
    }
    _HandleClose = (e) => {
      if(e.target.className === "showForm"){
        this.props.close();
      }
    }
    _HandleSelectList = (em) => {
      var emotion = this.state.emotion;
      emotion[0] = em;
      this.setState({
        emotion: emotion
      })
    }
  render() {
    return (
        <div className={this.props.onShow ? "showForm" : "hidden"} onClick={this._HandleClose}>
          <div className="emotionListBox">
            <div className="emotionListTitle">
              Những người đã thích
            </div>
            <div className="emotionListContainer">
              <div className="emotionListSelect">
                {this.state.emotion.map((emotionType, i) => {
                  if(emotionType.length)
                    return(
                      <div className={"emotionContainer" + (this.state.emotion[0] === i ? " selected" : "")} key={i} onClick={() => {this._HandleSelectList(i);}}>
                        <div className="emotion used">
                          <span className={"emotion_" + i}></span>
                        </div>
                        <div className="emotionNumber">
                          {emotionType.length}
                        </div>
                      </div>
                    );
                })}
              </div>
              <div className="emotionListData">
                {this.state.emotion[this.state.emotion[0]].map((author, i) => {
                  return(
                    <div className="emotionAuthorLine" key={i}>
                      <div className="userInfoAvatar">
                        <a href={"/profile/" + author._id}>
                          <div className="photo40">
                            <img src={origin + "/image/avatar/" + author._id} title="Trang cá nhân" />
                          </div>
                        </a>
                      </div>
                      <div className="userInfoUsername">
                        <a href={"/profile/" + author._id}>
                          {author.username}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="closeButton" onClick={this.props.close}>X</div>
          </div>
        </div>
    );
  }
}