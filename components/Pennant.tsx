export default function Pennant() {
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
      //@ts-expect-error
      const onScroll = (e) => {
        setScrollValue(e.target.documentElement.scrollTop);
      };
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollValue]);
    
    return (

    )
}