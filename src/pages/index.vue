<template>
  <div>
    <ul class="one">
      <li>
        <b
          v-for="(item,index) in tabTitle"
          :key="index"
          @click="btn(index,item.tab)"
          :class="{'active':iNow === index}"
        >{{ item.title }}</b>
      </li>
    </ul>

    <ul class="two">
      <li v-for="(item,index) in tabContent" :key="index">
        <img :src="item.author.avatar_url" alt />
        <span>{{ item.reply_count }}/{{ item.visit_count }}</span>
        <span class="ac" v-if="item.top && item.good">置顶</span>
        <span class="ac" v-if="!item.top && item.good">精华</span>
        <span class="act" v-if="!item.top && !item.good && flag">{{ hao[item.tab] }}</span>
        <span class="over" @click="to">{{ item.title }}</span>
        <b>{{ new Date()|format(item.create_at) }}</b>
      </li>
    </ul>

    <van-pagination :total-items="125" :show-page-size="3" force-ellipses />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabTitle: [
        { title: "全部", tab: "all" },
        { title: "精华", tab: "good" },
        { title: "分享", tab: "share" },
        { title: "问答", tab: "ask" },
        { title: "招聘", tab: "job" },
        { title: "客户端测试", tab: "dev" }
      ],
      iNow: 0,
      tabContent: [],
      hao: {
        share: "分享",
        ask: "问答",
        job: "招聘",
        dev: "客户"
      },
      flag: true
    };
  },
  methods: {
    async btn(index, tab) {
      this.iNow = index;
      const { data } = await this.axios.get(
        "https://cnodejs.org/api/v1/topics",
        {
          params: {
            tab
          }
        }
      );
      this.tabContent = data.data;
      index === 0 ? (this.flag = true) : (this.flag = false);
    },
    to() {
      this.$router.push({
        path: "/to"
      });
    }
  },
  async created() {
    const { data } = await this.axios.get("https://cnodejs.org/api/v1/topics");
    this.tabContent = data.data;
    console.log(this.tabContent);
  },
  filters: {
    format(nowTime, createTime) {
      let endTime = nowTime.getTime();
      let startTime = new Date(createTime).getTime();
      let time = (endTime - startTime) / 1000;
      let year = parseInt(time / 60 / 60 / 24 / 365);
      let month = parseInt(time / 60 / 60 / 24 / 30);
      let day = parseInt(time / 60 / 60 / 24);
      if (month >= 12) {
        return year + "年前";
      } else if (day < 30) {
        return day + "天前";
      } else {
        return month + "个月前";
      }
    }
  }
};
</script>
<style lang="less">
van-pagination {
  position: fixed;
  bottom: 0;
}
.one {
  height: 0.6rem;
  background-color: coral;
  padding: 0rem 0.06rem 0rem 0.06rem;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  border-radius: 0.04rem 0.04rem 0rem 0rem;
  li {
    b {
      margin-right: 0.36rem;
    }
  }
}
.active {
  padding: 0.06rem;
  color: #fff;
  border-radius: 0.04rem;
  background-color: cornflowerblue;
}
.two li {
  height: 0.7rem;
  background-color: #fff;
  padding: 0rem 0.06rem 0rem 0.06rem;
  line-height: 0.7rem;
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #f5f5f5;
  img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.03rem;
  }
  span {
    margin: 0rem 0.06rem 0rem 0.06rem;
  }
  .over {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 2.5rem;
    height: 0.7rem;
  }
  .ac {
    width: 0.5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: cornflowerblue;
    text-align: center;
    color: #fff;
    border-radius: 0.03rem;
  }
  .act {
    width: 0.5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: #ccc;
    text-align: center;
    color: #fff;
    border-radius: 0.03rem;
  }
}
</style>