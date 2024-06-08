<script>
export default {
  mounted() {
    const copyableElements = document.querySelectorAll("bdi");
    copyableElements.forEach((element) => {
      element.addEventListener("click", () => {
        this.copyText(element);
      });
    });
  },
  methods: {
    copyText(element) {
      const text = element.innerText;
      if (navigator.clipboard) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    console.log('复制成功')
                })
                .catch(() => {
                    console.log('复制失败')
                })
        } else {
            const tempInput = document.createElement("textarea");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                const successful = document.execCommand("copy");
                successful ? console.log('复制成功') : console.log('复制失败');
            } catch (err) {
                console.log('不能使用这种方法复制', err)
            }
            document.body.removeChild(tempInput);
      }
      alert("已复制内容: " + text);
    },
  },
};
</script>