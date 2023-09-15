import { Dashboard } from '../components';

const SecondLayout = ({ children }) => {
    return (
        <>
            <Dashboard></Dashboard>
            <div>{children}</div>
        </>
    );
};

export default SecondLayout;