import { Image } from "react-bootstrap";
import img from "../../images/tyontekijat.jpg";
function Tietoa() {
  return (
    <>
      <div className="container-sm mt-5 mx-auto">
        <p>
          <b>Yrityksemme</b>
          <br></br>
          Duis sit amet sapien at diam placerat porttitor. Proin vel metus non
          leo elementum viverra. Fusce vel est rutrum, sodales odio sed,
          consectetur mauris. Morbi vestibulum id enim nec bibendum. Etiam
          dapibus vitae ligula eu scelerisque. Praesent at ligula justo. Ut sit
          amet nisi ipsum. Nullam nunc sapien, sollicitudin ut pellentesque a,
          porta sed diam. Integer facilisis placerat nisl, in aliquet neque
          commodo et. Sed luctus iaculis faucibus. Donec pulvinar volutpat
          pharetra. Curabitur placerat commodo leo, id elementum lacus efficitur
          non. Ut vestibulum vehicula quam ac tempus. Sed nec dictum nisi, eu
          dictum purus. Suspendisse vitae urna aliquet, malesuada tellus vitae,
          placerat massa. Fusce vestibulum finibus lacus, quis luctus lectus
          blandit rhoncus.
        </p>
        <p>
          <b>Raaka-aineet</b>
          <br></br>
          Maecenas eleifend viverra neque, nec pellentesque erat vulputate id.
          Vestibulum felis eros, consectetur vitae fringilla ac, interdum
          facilisis ex. Curabitur odio mauris, lacinia ut suscipit lacinia,
          suscipit quis orci. Curabitur non varius metus, sit amet dapibus eros.
          In ut tellus faucibus, suscipit sapien a, fringilla urna. Nunc et
          pellentesque quam. Nunc nec iaculis neque. Etiam molestie, nunc non
          aliquet sodales, sem turpis rutrum sem, sit amet aliquet elit sem in
          erat. Aliquam a ligula pulvinar justo auctor volutpat. Duis laoreet
          lectus nec sapien sollicitudin maximus. Suspendisse potenti. Morbi
          mollis sem a justo porttitor lacinia. Praesent porta dictum metus, sed
          porttitor libero condimentum a. Cras ornare sem eu mollis volutpat.
          Donec finibus egestas lacus. Vivamus eget est orci. Nulla vel
          imperdiet nisl, sit amet vulputate justo. Curabitur mattis est gravida
          massa facilisis tempus. Proin hendrerit pulvinar euismod.
        </p>
        <p>
          <b>Henkilökunta</b>
          <br></br>
          Maecenas eleifend viverra neque, nec pellentesque erat vulputate id.
          Vestibulum felis eros, consectetur vitae fringilla ac, interdum
          facilisis ex.
        </p>
        <div
          className="container-sm mx-auto"
          style={{
            width: 800,
          }}
        >
          <Image fluid src={img} />
        </div>
      </div>
    </>
  );
}

export default Tietoa;
