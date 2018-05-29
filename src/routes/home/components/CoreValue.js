import React from 'react'

class CoreValue extends React.Component {
  render () {
    const coreValue = this.props.data.information.value.home.coreValue
    return (
      <div className="values margin-bottom-60">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <h3>{coreValue.title}</h3>
            <p className="text-center">
              <span>{coreValue.author}</span>
            </p>
            <hr className="hr-quote" />
            <p className="text-center">
              {coreValue.body}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoreValue
