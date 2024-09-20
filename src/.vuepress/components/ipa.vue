<template>
    <component
        :is="'span'"
        :data-label="labelText"
        :aria-label="labelText"
        role="ipa"
        :class="['canipa']"
        :style="[
            { cursor: 'pointer' },
        ]"
        @click="copyText"
    >
        <slot name="default"></slot>
    </component>
</template>

<script>
export default {
  data() {
    return {
      labelText: "IPA标签"
    };
  },
  methods: {
    copyText() {
      const text = this.$el.innerText;
      if (navigator.clipboard) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    console.log('复制成功');
                    alert("已复制内容: " + text);
                })
                .catch(() => {
                    console.log('复制失败');
                })
        } else {
            const tempInput = document.createElement("textarea");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                const successful = document.execCommand("copy");
                successful ? console.log('复制成功') : console.log('复制失败');
                alert("已复制内容: " + text);
            } catch (err) {
                console.log('不能使用这种方法复制', err);
            }
            document.body.removeChild(tempInput);
        }
    },
  },
};
</script>