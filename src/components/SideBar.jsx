export default function SideBar(props) {
    const { handleToggleModal } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martain Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>fgsfdgfsdgfdssgsfdgfdsgfsdgsdff fdg fdgsfdgfdsg</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}