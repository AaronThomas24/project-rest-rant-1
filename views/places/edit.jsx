const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="form-group">
      <label htmlFor="name">Place Name</label>
      <input 
        className="form-control" 
        id="name" 
        name="name" 
        value={data.place.name} 
      required />
  </div>
  ...
</form>


          </main>
        </Def>
    )
}

module.exports = edit_form
