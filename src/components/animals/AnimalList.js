import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        // {console.log(this.props.employees)}
       console.log(this.props.animals)
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <section key={animal.id}>
                        <h1>{animal.name}</h1>
                        <p>{animal.habitat}</p>
                    </section>

                )
            }
            </section>
        )
    }
}
export default AnimalList