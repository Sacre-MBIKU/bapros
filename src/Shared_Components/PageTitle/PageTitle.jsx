import PageTitleDecoration from "./PageTitleDecoration";

const PageTitle = ({children, modalBox}) => {
    return(
        <PageTitleDecoration modalBox={modalBox}>
            {children}
        </PageTitleDecoration>
    )
}

export default PageTitle;