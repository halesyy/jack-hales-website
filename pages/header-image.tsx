import BigBackgroundBlobs from "components/BigBackgroundBlobs";

function HeaderImagePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="relative overflow-hidden rounded-2xl shadow-xl w-[1200px] h-[630px] bg-black">
        <BigBackgroundBlobs />
      </div>
    </div>
  );
}

export default HeaderImagePage;


