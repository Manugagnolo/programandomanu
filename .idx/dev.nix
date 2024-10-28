{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.php82
    pkgs.nodejs_20
    pkgs.python3
  ];
idx = {
  extensions = [];
  previews = {
    enable = true;
    previews = {
      web = {
        #command = ["python3" "-m" "http.server" "$PORT" "--bind" "0.0.0.0"];
        command = ["php" "-S" "0.0.0.0:$PORT"];
        manager = "web";
      };
    };
  };
  workspace = {
    onCreate = {
      default.openFiles = ["style.css" "main.js" "index.html"];
    };
  };
};
}