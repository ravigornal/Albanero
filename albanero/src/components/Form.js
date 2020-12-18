import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div className="container">
                {this.props.state.isRowDisplay && <form>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <input className="form-control" type="text" placeholder="Name" name="name" value={this.props.state.name} onChange={this.props.handleChange}/>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="form-group">
                                <input className="form-control" type="text" placeholder="Value" name="value" value={this.props.state.value} onChange={this.props.handleChange}/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                            <button type="button" className="btn btn-danger" onClick={this.props.disableRow}>X</button>
                            </div>
                        </div>
                    </div>
                </form>}
                <div className="ml-auto">
                    <button type="button" className="btn btn-success" onClick={this.props.disableRow} disabled={this.props.state.isRowDisplay}>Add Row</button>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Form
