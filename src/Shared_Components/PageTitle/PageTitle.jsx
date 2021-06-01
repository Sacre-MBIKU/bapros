import PageTitleDecoration from "./PageTitleDecoration";

const PageTitle = ({children}) => {
    return(
        <PageTitleDecoration>
            {children}
        </PageTitleDecoration>
    )
}

export default PageTitle;