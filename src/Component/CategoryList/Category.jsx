
const Category = () => {
    return (
        <div className="text-center">
            <h1 className="text-6xl">Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between items-center container mx-auto my-5">
                <div className="bg-slate-500 p-9 rounded-lg">
                    <img className="bg-orange-200 p-2 rounded-2xl" src="./src/assets/icons/accounts.png" alt="" />
                    <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-slate-500 p-9 rounded-lg">
                    <img className="bg-orange-200 p-2 rounded-2xl" src="./src/assets/icons/calendar.png" alt="" />
                    <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-slate-500 p-9 rounded-lg">
                    <img className="bg-orange-200 p-2 rounded-2xl" src="./src/assets/icons/creative.png" alt="" />
                    <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-slate-500 p-9 rounded-lg">
                <img className="bg-orange-200 p-2 rounded-2xl" src="./src/assets/icons/chip.png" alt="" />
                <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;