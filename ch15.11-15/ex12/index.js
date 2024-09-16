const onClickUploadBtn = () => {
  const input = document.getElementById("fileUploadControl");
  const fileName = input.files[0].name;
  const reader = new FileReader();

  reader.onload = async function (e) {
    const arrayBuffer = e.target.result;
    const binaryData = new Uint8Array(arrayBuffer);

    // OneDriveにアップロードする関数を呼び出す
    await uploadFile(fileName, binaryData);
  };

  reader.readAsArrayBuffer(input.files[0]);
};

async function uploadFile(fileName, fileContent) {
  const tokenInput = document.getElementById("accessToken");
  const accessToken = tokenInput.value;
  const url = `https://graph.microsoft.com/v1.0/me/drive/root:/${fileName}:/content`;
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
    body: fileContent,
  };
  const uploadFileDiv = document.getElementById("uploadFile");
  const result = document.createElement("p");

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      result.textContent = "Success!";
      result.style.backgroundColor = "green";
      result.style.color = "white";
    } else {
      result.textContent = "Error";
      result.style.backgroundColor = "red";
      result.style.color = "white";
    }
    uploadFileDiv.appendChild(result);
  } catch (error) {
    result.textContent = "Error";
    result.style.backgroundColor = "red";
    result.style.color = "white";
    uploadFileDiv.appendChild(result);
  }
}

const submit = document.getElementById("submit");
submit.addEventListener("click", onClickUploadBtn);
