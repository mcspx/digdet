import React from 'react'

import AppBar from '../components/AppBar'

import Config from '../Config'

class Home extends React.Component {
  constructor ( ) {
    super ( )

    this.state = Home.defaultStates
  }

  componentWillMount ( ) {
    var thss   = this

    $.ajax({
      url: `${Config.URL.LANG}`,
      success: function (data) {
        console.log(data)
        thss.setState({
          lang: data
        })
      }
    })
  }

  render ( ) {
    return (
      <div className="wrapper">
        <AppBar/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="text-center">
                <div className="form-group">

                  <select className="selectpicker" data-style="btn-primary btn-brand" multiple>
                    {this.state.lang.map(({code, name}) => <option key={code} value={code}>{name}</option>)}
                  </select>
                </div>
                <div id="canvas-container" className="img-thumbnail">
                  <div id="webcam"/>
                  <canvas id="canvas"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default no-border-radius no-shadow navbar-fixed-bottom no-margin">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="text-center">
                  <div id="btn-toolbar-unfreeze">
                    <button id="btn-freeze" className="btn btn-default no-border no-background no-shadow">
                      <img className="img-responsive" width="32" src={`${Config.URL.ASSETS}/img/icons/camera-shutter.png`}/>
                    </button>
                  </div>

                  <div id="btn-toolbar-freeze" className="hidden">
                    <button id="btn-unfreeze" className="btn btn-default no-border no-background no-shadow">
                      <img className="img-responsive" width="32" src={`${Config.URL.ASSETS}/img/icons/arrow-left.png`}/>
                    </button>
                    <button id="btn-detect" className="btn btn-default no-border no-background no-shadow">
                      <img className="img-responsive" width="32" src={`${Config.URL.ASSETS}/img/icons/arrow-right.png`}/>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home.defaultStates = {
  lang: [ ]
}

export default Home
