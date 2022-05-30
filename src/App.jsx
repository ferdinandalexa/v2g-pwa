import Header from './Components/Header';
import Footer from './Components/Footer';
import FilesUploader from './Components/FilesUploader';
import FilesList from './Components/FilesList';
import Transcode from './Containers/Transcode';

function App () {
  return (
    <div className='h-full max-w-screen-md mx-auto'>
      <Header />
      <main className='flex flex-col gap-4 my-4'>
        <Transcode>
          <FilesUploader />
          <FilesList />
        </Transcode>
      </main>
      <Footer />
    </div>
  );
}

export default App;
