import { AdminView } from "@miq/adminjs";
import { createRef, useState } from "react";



// VIDEO;
export default function DashboardView(props) {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);
    const { user } = useContext(SharedDataCtx);

    useEffect(() => {
        // getVideo();
    }, [videoRef]);

    const getVideo = (props) => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error("error:", err);
            });
    };

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 200);
    };

    const stop = (e) => {
        let video = videoRef.current;
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            track.stop();
        }

        video.srcObject = null;
    };

    const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;

        const data = photo.toDataURL("image/jpeg");

        console.warn(data);
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);
    };

    // const [items, setI] = useState(i1);
    return (
        <AdminView title="Dashboard" actions={<>Ajouter document</>} className="">
            <div className="">
                <h3>Welcome back, {user.first_name}</h3>

                <h4>Recent files</h4>
                <div className="">
                    <div className="">Document title {">"}</div>
                </div>

                <div className="">
                    {/* <button onClick={getVideo}>Take a photo</button> */}
                    <button onClick={() => takePhoto()}>Take a photo</button>
                    <video onCanPlay={() => paintToCanvas()} ref={videoRef} className="player" />
                    <canvas ref={photoRef} className="d-none" />
                    <div className="photo-booth">
                        <div ref={stripRef} className="strip" />
                    </div>
                </div>
            </div>
        </AdminView>
    );
}



/**
 * 
 * 
 * 
 * 
 * 
 * 
 */



const i1 = [
    { src: "https://cdn.pixabay.com/photo/2021/06/21/19/51/beach-6354502_1280.jpg", width: 1280, height: 853 },
    { src: "https://cdn.pixabay.com/photo/2020/03/11/15/16/friends-4922436_1280.jpg", width: 853, height: 1280 },
    {
        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54704d91-b44f-4b17-a28b-0fe78cc092d1/dce1cym-272f039f-5519-4dd1-b4f4-e1ef6d843822.jpg/v1/fill/w_800,h_1200,q_75,strp/rgzg_x_lui_opa_by_rgzgcreative_dce1cym-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzU0NzA0ZDkxLWI0NGYtNGIxNy1hMjhiLTBmZTc4Y2MwOTJkMVwvZGNlMWN5bS0yNzJmMDM5Zi01NTE5LTRkZDEtYjRmNC1lMWVmNmQ4NDM4MjIuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Iesa1NNGEJWdTYmA4-uuywUpky3C5U3QNTVSxXSgKts",
        width: 1280,
        height: 1280,
    },
    { src: "https://cdn.pixabay.com/photo/2021/06/20/16/57/woman-6351539_1280.jpg", width: 1280, height: 800 },
    { src: "https://cdn.pixabay.com/photo/2021/04/05/14/55/mosque-6153752_1280.jpg", width: 857, height: 1280 },
    { src: "http://192.168.1.189:3002/static/media/pd7.2a39bae2.jpg", width: 1280, height: 800 },
    { src: "https://cdn.pixabay.com/photo/2021/04/05/14/55/mosque-6153752_1280.jpg", width: 857, height: 1280 },
    {
        src: "https://assets2.ello.co/uploads/asset/attachment/12597932/ello-optimized-39729326.jpg",
        width: 853,
        height: 1280,
    },
    // ];

    // const i2 = [
    {
        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ad68aca-5172-4102-83f2-397201cb7e12/ddxtb92-8b7117f4-4b11-4b76-a5e1-d7211b44bc83.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhZDY4YWNhLTUxNzItNDEwMi04M2YyLTM5NzIwMWNiN2UxMlwvZGR4dGI5Mi04YjcxMTdmNC00YjExLTRiNzYtYTVlMS1kNzIxMWI0NGJjODMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VQ69XLLi5SZd_8JqZWmmtyeKsvB74ZeIEiv_SAr1GdA",
        width: 1280,
        height: 800,
    },
    { src: "https://cdn.pixabay.com/photo/2020/03/11/15/16/friends-4922436_1280.jpg", width: 853, height: 1280 },
    { src: "https://cdn.pixabay.com/photo/2021/06/20/16/57/woman-6351539_1280.jpg", width: 1280, height: 800 },
    {
        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54704d91-b44f-4b17-a28b-0fe78cc092d1/degx8tb-b96a8345-71d1-48e4-b6eb-4788b59746d5.jpg/v1/fill/w_800,h_1001,q_75,strp/rgzg_x_ily_by_rgzgcreative_degx8tb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMSIsInBhdGgiOiJcL2ZcLzU0NzA0ZDkxLWI0NGYtNGIxNy1hMjhiLTBmZTc4Y2MwOTJkMVwvZGVneDh0Yi1iOTZhODM0NS03MWQxLTQ4ZTQtYjZlYi00Nzg4YjU5NzQ2ZDUuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0qFij3HG-NBYaU05k3d5TgBSdE6_-bcwxTN9WdilHw8",
        width: 857,
        height: 1280,
    },
    { src: "https://cdn.pixabay.com/photo/2021/06/20/16/57/woman-6351539_1280.jpg", width: 1280, height: 800 },
    { src: "https://cdn.pixabay.com/photo/2021/06/21/19/51/beach-6354502_1280.jpg", width: 1280, height: 853 },
    {
        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ad68aca-5172-4102-83f2-397201cb7e12/de6ehby-859a0adb-b002-40ed-b208-2de1fd2d1da8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhZDY4YWNhLTUxNzItNDEwMi04M2YyLTM5NzIwMWNiN2UxMlwvZGU2ZWhieS04NTlhMGFkYi1iMDAyLTQwZWQtYjIwOC0yZGUxZmQyZDFkYTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wihIoj_BWlLSEK-RAfNZUwHFL0S1mEk-afYY9wAnOT0",
        width: 1280,
        height: 853,
    },
    { src: "https://cdn.pixabay.com/photo/2020/03/11/15/16/friends-4922436_1280.jpg", width: 853, height: 1280 },
    { src: "https://cdn.pixabay.com/photo/2021/05/14/22/11/faces-6254573_1280.jpg", width: 1280, height: 1280 },
    { src: "https://cdn.pixabay.com/photo/2021/04/05/14/55/mosque-6153752_1280.jpg", width: 857, height: 1280 },
    { src: "https://cdn.pixabay.com/photo/2021/06/20/16/57/woman-6351539_1280.jpg", width: 1280, height: 800 },
    { src: "https://cdn.pixabay.com/photo/2021/06/20/16/57/woman-6351539_1280.jpg", width: 1280, height: 800 },
];

export default function DashboardView(props) {
    // const [items, setI] = useState(i1);
    return (
        <AdminView title="Dashboard">
            {/* <MasonryGrid>
                {items.map((item, i) => (
                    <MasonryGrid.Img key={item.src} {...item} index={i} />
                ))}
            </MasonryGrid> */}

            {/* <Masonry items={items} /> */}
            {/* <MasonryRows items={items} /> */}

            <div className="my-4">{/* <button onClick={() => setI([...items, ...i1])}>More</button> */}</div>
        </AdminView>
    );
}

export const Masonry = ({ items = [], ...props }) => {
    return (
        <div className="miq-masonry">
            {items.map((i) => (
                <div className="item"></div>
            ))}
        </div>
    );
};

export const MasonryRows = ({ items = [], ...props }) => {
    const containerRef = createRef();
    // const [containerWidth] = useState(window.innerWidth);
    // const stdRatio = 1;
    // const stdHeight = containerWidth / stdRatio;

    // const getGrid = useCallback(
    //     (props) => {
    //         const rows = [];
    //         let row = [];
    //         const imgsPerRow = 4;
    //         items.forEach((item, i) => {
    //             const rowIsFull = i % imgsPerRow === imgsPerRow - 1;
    //             const isLastItem = i === items.length - 1;
    //             const newRow = rowIsFull || isLastItem;

    //             console.log(i, rowIsFull, isLastItem);

    //             //
    //             const ratio = item.width / item.height;
    //             const itemNewWidth = containerWidth * ratio;
    //             console.log(ratio, itemNewWidth, item.width);

    //             item = { ...item, ratio, isLastItem };

    //             row.push(item);
    //             if (newRow) {
    //                 rows.push(row);
    //                 console.log(row);
    //                 row = [];
    //             }
    //         });
    //     },
    //     [containerWidth, items]
    // );

    const getOrders = (items) => {
        const cols = 4;
        const newItems = [];
        const grid = {};

        for (let i = 0; i < items.length; i++) {
            const order = (i + 1) % cols === 0 ? cols : (i + 1) % cols;
            // const rowIsFull = i % cols === cols - 1;
            // const isLastItem = i === items.length - 1;
            // const newRow = rowIsFull || isLastItem;
            const key = `${order}`;
            if (!Object.keys(grid).includes(key)) {
                grid[key] = [];
            }

            const item = { ...items[i], order, i };
            grid[key].push(item);
            newItems.push(item);
        }

        // console.log(grid);
        return Object.values(grid);
    };

    const grid = getOrders(items);

    return (
        <div className="miq-masonry-rows" ref={containerRef}>
            {grid.map((col) => (
                <div className="miq-masonry-item">
                    {col.map((item) => (
                        <div className="miq-masonry-content">
                            <img
                                src={item.src}
                                alt=""
                                style={{ display: "flex", width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
            ))}

            {/* {grid.map((item, i) => (
                <div className="miq-masonry-item" style={{ order: item.order }}>
                    <img
                        src={item.src}
                        alt=""
                        style={{ display: "flex", width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </div>
            ))} */}
        </div>
    );
};
