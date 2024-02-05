import React, { Component } from 'react';

class AddJob extends Component {
    render() {
        return (
            <div className= "col-md-8 mb-4">

                
                <div className= "card">
                <div className= "card-header">
                    <h4>Add Job</h4>
                </div>    
                <div className= "card-body">

                    <form>

                        <div className="form-group">                  
                            <label htmlFor="name">Job: </label>
    
                                <input 
                                type="text" 
                                name="name"
                                id="id"
                                placeholder="Job" 
                                class="form-control"
                                maxLength={70}
                                />
  
  </div>    

  <div className="form-group">
  <div>Priority: </div>
  <select class="select">
  <option value="1">Urgent</option>
  <option value="2">Regular</option>
  <option value="3">Trivial</option>
</select>
</div>

  <div>
  <input type="submit" value="Create" placeholder="Job"/>
  </div>
</form>

                    
                    

            
            </div>
            </div>


                </div>
        )
    }
}
export default AddJob;