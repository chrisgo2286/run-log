export default function ProfileItem ({ label, data }) {
    return (
        <div className="profile-item">
            <span className="label">{ label }:</span>
            <span className="profile-data">{ data }</span>
        </div>
    )
}