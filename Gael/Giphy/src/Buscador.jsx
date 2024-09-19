export const Buscador = ({onSubmit, valorInput, onChange}) => {
    return (
    <form className='from_buscador' onSubmit={onSubmit}>
      <input className='buscador' value={valorInput} onChange={onChange}/>
    </form>
    )
}