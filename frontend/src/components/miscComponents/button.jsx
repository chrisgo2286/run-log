export default function Button ({ onClick }) {
    return (
        <div className="button" onClick={ onClick }>
            { props.children }
        </div>
    )
}